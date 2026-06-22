import { Link } from "react-router-dom";

import Button from "./Button";
import Linksvg from "../assets/icons/Link.svg";

function Navbar() {
  return (
    <div className="text-align">
      <div className=" flex items-center justify-between ">
        <div>
          <Link to={"/"}>
            <img src={Linksvg} alt="Link svg" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-8">
            <div className="flex gap-8">
              <Link
                to={"/"}
                className=" font-inter font-medium text-sm  leading-5 align-middle text-slate-900"
              >
                Home
              </Link>
              <Link
                to={"/posts"}
                className=" font-inter font-medium text-sm  leading-5 align-middle text-slate-900"
              >
                Posts
              </Link>
            </div>
            <Link to={"#"}>
              <Button text={"Login"} variant={"primary"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
