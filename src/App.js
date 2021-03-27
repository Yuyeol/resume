/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import photo from "assets/photo.png";
import blog from "assets/blog.gif";
import movie from "assets/movie.gif";
import mall from "assets/mall.gif";
import {
  FaCss3Alt,
  FaFighterJet,
  FaGraduationCap,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaPython,
  FaReact,
  FaRegAddressCard,
  FaRegHandRock,
  FaRegUser,
} from "react-icons/fa";
import { RiSeedlingLine, RiSunLine } from "react-icons/ri";
import { FiBookOpen, FiMail, FiSmartphone } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const SKY = "#7b9acc";
const GREY = "#ebebeb";

const Container = styled.div`
  width: 840px;
  height: 1188px;
  border: 1px solid lightgrey;
`;

const Main = styled.div`
  display: flex;
`;
const Section1 = styled.div`
  width: 420px;
  height: 1140px;
  .wrapper {
    padding-left: 50px;
    padding-top: 50px;
    padding-right: 25px;
    .profile {
      .img-box {
        display: flex;
        img {
          width: 120px;
        }
        .name {
          .name-nick {
            font-size: 24px;
            color: grey;
            font-weight: 600;
          }
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .name-name {
            font-size: 40px;
            font-weight: 600;
          }
          .name-position {
            font-size: 20px;
            color: ${SKY};
            font-weight: 600;
          }
        }
      }
    }
    .title {
      &:not(:first-child) {
        margin-top: 30px;
      }
      padding: 3px 0;
      font-size: 16px;
      font-weight: 600;
      border-bottom: 3px solid ${SKY};
      line-height: 1.5;
    }
    .basic-f {
      margin-top: 15px;
    }
    .basic-info {
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      svg {
        margin-right: 5px;
      }
    }
    .core-value {
      margin-top: 15px;
      display: flex;
      .value-icon {
        font-weight: 600;
        svg {
          font-size: 50px;
          color: ${SKY};
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: ${GREY};
        width: 90px;
        height: 90px;
        border-radius: 50%;
      }
      .value-desc {
        margin-left: 15px;
        width: 240px;
        display: flex;
        align-items: center;
      }
    }
    .intro {
      margin-top: 15px;
      line-height: 1.5;
    }
  }
`;
const Section2 = styled.div`
  width: 420px;
  height: 1140px;
  .wrapper {
    padding-right: 50px;
    padding-top: 50px;
    padding-left: 25px;
    .title {
      margin-top: 30px;
      padding: 3px 0;
      font-size: 16px;
      font-weight: 600;
      border-bottom: 3px solid ${SKY};
      line-height: 1.5;
    }
  }
  .s-title {
    font-weight: 600;
    margin-top: 15px;
  }
  .language {
    display: flex;
    flex-wrap: wrap;
    .language-icon {
      margin-top: 10px;
      width: 86px;
      font-weight: 600;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      svg {
        font-size: 55px;
        color: ${SKY};
      }
      div {
        text-align: center;
      }
    }
  }
  .toy-title {
    margin-top: 15px;
    font-weight: 600;
  }
  a {
    font-weight: 600;
  }
  .toy {
    display: flex;
    .img-box {
      img {
        margin-top: 5px;
        width: 185px;
        margin-right: 5px;
      }
      div {
      }
    }
  }
  .etc-f {
    margin-top: 15px;
  }
  .etc-info {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    svg {
      margin-right: 5px;
    }
  }
`;

const App = () => {
  return (
    <Container>
      <Main>
        <Section1>
          <div className="wrapper">
            <div className="profile">
              <div className="img-box">
                <img src={photo} />
                <div className="name">
                  <div className="name-nick">성장하는 개발자</div>
                  <div className="name-name">정유열</div>
                  <div className="name-position">React Developer</div>
                </div>
              </div>
            </div>
            <div className="title">기본정보 / Basic Info</div>
            <div className="basic-info basic-f">
              <FaRegUser /> 남 / 29세 (1993. 07. 20)
            </div>
            <div className="basic-info">
              <FiSmartphone /> 010-4057-3260
            </div>
            <div className="basic-info">
              <FiMail /> uy23@naver.com
            </div>
            <div className="basic-info">
              <VscGithub />{" "}
              <a href="https://github.com/Yuyeol">https://github.com/Yuyeol</a>
            </div>
            <div className="title">핵심가치 / Core Value</div>
            <div className="core-value">
              <div className="value-icon">
                <RiSunLine /> 배려
              </div>
              <div className="value-desc">
                각각의 구성원들을 잘 살피고 이해하여 요구사항을 적시에 들어주고
                해결해 주고자 노력합니다.
              </div>
            </div>
            <div className="core-value">
              <div className="value-icon">
                <RiSeedlingLine />
                성장
              </div>
              <div className="value-desc">
                현실에 안주하거나 도태되지 않고 능동적인 자세로 배우며 스스로
                발전하려는 의지가 있습니다.
              </div>
            </div>
            <div className="core-value">
              <div className="value-icon">
                <FaRegHandRock />
                도전
              </div>
              <div className="value-desc">
                어떤 일이든 편견 없이 시도하려하고 그 속에서 의미를 찾고 배움을
                얻는 것을 좋아합니다.
              </div>
            </div>
            <div className="title">소개 / About Me</div>
            <div className="intro">
              자발적으로 공부하고 끊임없는 발전을 지향하는 주니어 개발자
              정유열입니다. 저에게 개발은 단순히 업무도구의 역할을 넘어서
              취미이고 즐거움입니다.
              <br />
              <br />
              국비지원 학원을 통해 JAVA로 개발 언어를 처음 접했고, 고민과
              시행착오 끝에 현재는 React를 주로 사용하고 있습니다. <br />
              지방에 거주하여 사람들과의 정보 교류가 어려워 아쉬웠으나, 인터넷을
              통해 적극적으로 공부하고 꾸준히 토이프로젝트를 만들며 성장하고
              있습니다.
            </div>
          </div>
        </Section1>
        <Section2>
          <div className="wrapper">
            <div className="title">기술스택 / Technical Stack</div>
            <div className="s-title">Usually Use</div>
            <div className="language">
              <div className="language-icon">
                <FaHtml5 />
                HTML
              </div>
              <div className="language-icon">
                <FaCss3Alt />
                <div>CSS</div>
              </div>
              <div className="language-icon">
                <FaJsSquare />
                <div>JS</div>
              </div>
              <div className="language-icon">
                <FaReact />
                <div>React JS</div>
              </div>
            </div>
            <div className="s-title">Tried Before</div>
            <div className="language">
              <div className="language-icon">
                <FaJava />
                Java
              </div>
              <div className="language-icon">
                <FaPython />
                <div>Python</div>
              </div>
              <div className="language-icon">
                <GrMysql />
                <div>MySQL</div>
              </div>
              <div className="language-icon">
                <SiMongodb />
                <div>Mongo DB</div>
              </div>
            </div>
            <div className="title">토이프로젝트 / Toy Project</div>
            <div className="toy-title">1. 개인 블로그</div>
            <a href="https://github.com/Yuyeol/blog-react">
              [포트폴리오 열기]
            </a>{" "}
            <a href="https://yuyeol.github.io/blog-react/#/">[페이지 열기]</a>
            <div className="toy">
              <div className="img-box">
                <img src={blog}></img>
              </div>
              <div className="desc">
                [개요] React Hooks의 useContext와 useReducer를 활용한 블로그
                만들기
              </div>
            </div>
            <div className="toy-title">2. 무비포스터 뷰어</div>
            <a href="https://github.com/Yuyeol/themovie-react">
              [포트폴리오 열기]
            </a>{" "}
            <a href="https://yuyeol.github.io/themovie-react/#/">
              [페이지 열기]
            </a>
            <div className="toy">
              <div className="img-box">
                <img src={movie}></img>
              </div>
              <div className="desc">
                [개요] TMDB API를 활용하여 테마 및 카테고리별 Movie, Show 정보를
                제공
              </div>
            </div>
            <div className="toy-title">3. 쇼핑몰 클론코딩</div>
            <a href="https://github.com/Yuyeol/fashion-mall-ff">
              [포트폴리오 열기]
            </a>{" "}
            <a href="https://yuyeol.github.io/fashion-mall-ff">[페이지 열기]</a>
            <div className="toy">
              <div className="img-box">
                <img src={mall}></img>
              </div>
              <div className="desc">
                [개요] React Hooks의 useState를 사용한 쇼핑몰 클론코딩
              </div>
            </div>
            <div className="title">기타정보 / More Info</div>
            <div className="etc-info etc-f">
              <FaRegAddressCard /> 2020. 08. 28 정보처리기사 자격증 취득
            </div>
            <div className="etc-info">
              <FiBookOpen /> 2019. 09. 13 자바 개발자 양성훈련과정 수료
            </div>
            <div className="etc-info">
              <FaGraduationCap /> 2019. 02. 22 부경대학교 경영학과 졸업
            </div>
            <div className="etc-info">
              <FaFighterJet /> 2015. 08. 18 공군 병장 만기전역
            </div>
          </div>
        </Section2>
      </Main>
    </Container>
  );
};

export default App;
