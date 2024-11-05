
export default function SideBar(props) {
  const {hideSideBar} = props
    
    return (
        <div className="sidebarHTML h-screen w-[13rem] p-3 sticky top-0 left-0">
            <button onClick={hideSideBar}><i class="fa-solid fa-arrow-left text-xl mb-2"></i></button>
           <h1 className="text-[#3929ff] text-xl mb-5">CramIT</h1>
           <h4 className="text-gray-100 text-[10px]">Courses</h4>

           <h4 className="text-gray-100 text-[10px]">Others</h4>
           
        </div>
    )
}