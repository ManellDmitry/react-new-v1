import React from "react";
import { List } from "./styledComponents";
import styled from "styled-components";
import { Button } from "./Button";

const SectionWrapper = styled.section`
  padding: 100px 0;
`;

const SectionTitle = styled.h2`
  font-size: 58px;
  line-height: 1.25;
  letter-spacing: 0.2px;
`;

const DataList = styled(List)`
  margin-bottom: 64px;
  margin-top: 44px;
  justify-content: center;
  flex-flow: row wrap;
`;

const DataItem = styled.li`
  max-width: 520px;
  width: 100%;
  margin-bottom: 64px;
  :nth-child(2n + 1) {
    margin-right: 30px;
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  margin-bottom: 30px;
  ::after {
    content: "";
    width: inherit;
    height: 1px;
    background-color: black;
    margin-top: 20px;
    display: block;
  }
`;

const ItemTitle = styled.h3`
  font-size: 23px;
  line-height: 1.46;
  letter-spacing: 0.2px;
  color: #464542;
  margin-bottom: 4px;
`;

const WorkType = styled.li`
  color: #6d6b67;
  line-height: 1.6;
  font-size: 15px;
  letter-spacing: 0.4px;
  :not(:last-child) {
    margin-right: 16px;
  }

  ::after {
    content: "/";
    display: inline-block;
    color: #e0dfdc;
    margin-left: 4px;
  }

  :last-child {
    ::after {
      color: black;
    }
  }
`;

const RecentWork = ({ data }) => {
  const handleButtonClick = () => {
    console.log("click on BUTTON");
  };

  return (
    <SectionWrapper>
      <SectionTitle>Recent Work</SectionTitle>
      <DataList>
        {data.map((work) => {
          return (
            <DataItem key={work.id}>
              <ImageWrapper>
                <img src={work.image} alt={work.label} />
              </ImageWrapper>
              <ItemTitle>{work.label}</ItemTitle>
              <List>
                {work.works.map((item) => {
                  return <WorkType key={item.id}>{item.label}</WorkType>;
                })}
              </List>
            </DataItem>
          );
        })}
      </DataList>
      <Button label="see all works" handleClick={handleButtonClick} />
    </SectionWrapper>
  );
};

export default RecentWork;
