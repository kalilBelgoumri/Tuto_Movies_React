import React from "react";
import { useNavigate } from "react-router-dom";
import CopyrightTwoTone from "@ant-design/icons/CopyrightTwoTone";
import GithubOutlined from "@ant-design/icons/GithubOutlined";
import LinkedinOutlined from "@ant-design/icons/LinkedinOutlined";
function FooterUser() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center mb-5 gap-5">
        <GithubOutlined
          onClick={() => window.open("https://github.com/kalilBelgoumri")}
          style={{ fontSize: 20 }}
        />
        <LinkedinOutlined
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/kalil-belgoumri-1a5b17203/"
            )
          }
          style={{ fontSize: 20 }}
        />
      </div>
      <div className="flex justify-center">
        <div className="flex items-center">
          <CopyrightTwoTone twoToneColor="#FFFF" style={{ fontSize: 20 }} />
          <h1 className="text-white text-center px-5">copyright kalil 2022</h1>
        </div>
      </div>
    </>
  );
}

export default FooterUser;
