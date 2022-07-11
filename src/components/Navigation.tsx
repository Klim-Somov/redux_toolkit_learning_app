
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="flex justify-between px-5 h-[50px] bg-slate-500 items-center shadow-md " >
      
      <Link to="/">Airport</Link>
      <Link to="/auth">Auth</Link>
    </nav>
  );
};
