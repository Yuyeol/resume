# React Query 3계층 아키텍처로 복잡한 서버 상태 관리 문제 해결하기

> React Query를 컴포넌트에서 직접 사용하며 겪은 복잡성 문제를 Repository Pattern(API Layer)과 CQS(Hooks Layer)를 적용한 3계층 아키텍처로 해결하여 코드 품질과 개발 생산성을 크게 향상시킨 경험을 공유합니다.

- **참고한 아키텍처 패턴** [Separate API Layers In React Apps](https://profy.dev/article/react-architecture-api-layer)

## React Query 직접 사용 시 마주한 현실적 문제들

### 컴포넌트 비대화와 책임 분산 실패

**초기 상태**: API 호출로직이 컴포넌트에 원칙없이 혼재

```typescript
const AdvisorChatComponent = () => {
  const getGrades = async (submodelCode: string, yearCode?: string, accidentCode?: string) => {
    ...
  };
  const postAnswer = async (body: IAnswerBody) => {
    ...
  };
  const { data: gradeData } = useQuery({
    queryFn: () => getGrades(submodelCode),
    queryKey: ['grades', ...],
    ...
  });
  const postAnswerMutation = useMutation({
    mutationFn: postAnswer,
    onSuccess: (data, variables) => {
    ...
    },
  });

  ...

  return (
    <ChatInterface
      ...
    />
  );
};
```

### 중복 코드와 일관성 부족

- **API 로직 중복**: 동일한 fetch 로직이 여러 컴포넌트에 복사되어 코드 분량 증가 및 가독성 저하
- **쿼리 키 관리 혼란**: 동일한 데이터로 동료 개발자와 다른 쿼리키를 사용하여 캐시 활용률 저하
- **에러 처리 및 비즈니스 로직의 강한 결합도**: 각 컴포넌트마다 다른 에러 처리와 비즈니스 로직이 작성되어 일관성 부족

## 3계층 아키텍처 + CQS 패턴 도입 과정

### 1단계: API Layer 분리

API 로직을 분리하여 서버 & 클라이언트 fetching과 여러 도메인에 공유되도록 합니다.

```typescript
// app/_api/dialog/grades.ts
const getGrades = async (submodelCode: string, yearCode?: string, accidentCode?: string) => {
  ...
};

export { getGrades };

// app/_api/dialog/answer.ts
const postAnswer = async (body: IAnswerBody) => {
  ...
};

export { postAnswer };

```

### 2단계: Hooks Layer 분리

API Layer가 CQS(읽기 / 쓰기 로직의 분리)패턴에 맞춰 분리하여 가독성을 높이면서도 일관된 캐싱과 에러처리를 가능하게 합니다.

```typescript
// app/_hooks/queries/dialog/useGetGrades.ts
function useGetGrades(submodelCode: string) {
  const { data } = useQuery<IGradesResponse>({
    queryFn: () => getGrades(submodelCode),
    queryKey: ['grades', ...],
    ...
  });
  return { data };
}

export { useGetGrades };

// app/_hooks/queries/dialog/usePostAnswer.ts
function usePostAnswer() {
  return useMutation<IPostAnswerResponse, Error, IAnswerBody>({
    mutationFn: ({ body }) => postAnswer(body),
    ...
  });
}

export { usePostAnswer };
```

### 정리된 파일 구조

```python
app/
├── _api/  # API Layer
│   └── dialog/
│       ├── answer.ts
│       └── grades.ts
└── _hooks/ # Hooks Layer
    └── queries/
        └── dialog/
            ├── useGetGrades.ts
            └── usePostAnswer.ts
```

### 3단계: Component Layer 단순화

```typescript
// 개선된 컴포넌트 - API 로직과 React Query 설정이 완전히 분리됨
const AdvisorChatComponent = () => {
  const { data: gradeData } = useGetGrades();
  const { mutate: postAnswer } = usePostAnswer();

  ...

  return (
    <ChatInterface
      ...
    />
  );
};
```

## 📈 아키텍처 개선으로 얻은 구체적 성과

- **컴포넌트 크기 감소로 인한 가독성 증가**: 코드리뷰 시간 단축 및 주요 이슈에 리뷰 집중
- **쿼리 키 표준화**: 일관된 네이밍에 의해 정확한 캐싱으로 불필요한 API 호출 감소
- **에러 처리 일관성**: 훅 레이어에 모든 에러 핸들링을 위임하여 중복 에러처리 제거, 사이드 이펙트 추적 효율 향상
