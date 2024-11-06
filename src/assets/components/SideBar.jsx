import { useState } from "react";

export default function SideBar(props) {
  const { hideSideBar, tabs, handleTabClick, removeTab } = props;
  const filterCourse = tabs.filter((tab) => tab !== "All" && tab !== "Done");

  const [isEditOn, setIsEditOn] = useState(false);
  function editTab() {
    setIsEditOn((prev) => !prev);
  }

  return (
    <div className="sidebarHTML h-screen w-[15rem] p-3 sticky top-0 left-0 flex flex-col justify-between">
      <div className="">
        <button onClick={hideSideBar}>
          <i class="fa-solid fa-arrow-left text-xl mb-2"></i>
        </button>
        <h1 className="text-[#3929ff] text-xl mb-5">CramIT</h1>

        <h4 className="text-gray-100 text-sm mb-1">Courses</h4>
        <div className="tabs flex flex-col items-start gap-1 mb-2 mt-1">
          {filterCourse.map((tab, tabIndex) => {
            return (
              <div className="relative">
                <button
                  onClick={() => {
                    handleTabClick(tab);
                  }}
                  className="text-gray-400 text-[.8rem]"
                  key={tabIndex}
                >
                  {tab}
                </button>
                <i onClick={() => { removeTab(tab) }} className={"cursor-pointer remove-tab-icon absolute fa-solid fa-x text-[10px] text-red-500 " + (isEditOn ? ' ' : 'hidden')}></i>
              </div>
            );
          })}
        </div>
        <h4 className="text-gray-100 text-sm">Others</h4>
      </div>

      <div className="text-center flex flex-col gap-2">
        <button
          className="text-xs bg-gray-800 w-full rounded-sm py-1.5"
          onClick={editTab}
        >
          {isEditOn ? "Done" : "Edit Tab"}
        </button>
        <button className="text-xs w-full bg-gray-800 rounded-sm py-1.5">
          Add Tab
        </button>
      </div>
    </div>
  );
}
