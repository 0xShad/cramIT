
export default function SideBar(props) {
  const {hideSideBar, tabs, handleTabClick} = props
    
    return (
        <div className="sidebarHTML h-screen w-[13rem] p-3 sticky top-0 left-0">
            <button onClick={hideSideBar}><i class="fa-solid fa-arrow-left text-xl mb-2"></i></button>
           <h1 className="text-[#3929ff] text-xl mb-5">CramIT</h1>
           <h4 className="text-gray-100 text-sm mb-1">Courses</h4>
           <div className="tabs flex flex-col items-start gap-1 mb-2 mt-1">
            {tabs.map((tab, tabIndex) => {
              return  <button onClick={() => {
                handleTabClick(tab)
              }} className="text-gray-400 text-[.8rem]" key={tabIndex}>{tab}</button>
            })}
           </div>
           <h4 className="text-gray-100 text-sm">Others</h4>
           
        </div>
    )
}