import React, { useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { getSidebarItemsAction } from "../../store/ducks/menu";
import TemplateSideBar from "./template";

const SideBar: React.FC = () => {
  const dispatch = useAppDispatch();

  const { sidebar } = useAppSelector((state: RootState) => state.menuReducer);
  
  useEffect(() => {
    dispatch(getSidebarItemsAction());
  }, []);

  console.log(sidebar)
  return (<TemplateSideBar items={sidebar} />);
};

export default SideBar;
