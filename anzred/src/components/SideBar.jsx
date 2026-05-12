function SideBarPLacement() {

    const DataSideBar = [
       { id:1, title: 'Тип обучения на платформе', text: 'Онлайн' },
       { id:2, title: '', text: '  ' },
       { id:3, title: '', text: ' ' },
    ]



    return (
        <div className="SideBarPlacement">
                <div className="SideBarPlacement__content">
                    
                    <hr className="TheLinesBeetwenContent" />

                    <hr className="TheLinesBeetwenContent" />
                </div>
        </div>
    )
}


function SideBarSelector(DataSideBar) {
    return (
        <div className="SideBarSelector">
            <h3 className="SideBarTitle">{DataSideBar.title}</h3>
            <div className="SideBarSelectorsContainer">
                <div className="SideBArSelectorItem">
                    <div className="SideBarButton"></div>
                    <h3 className="SideBarItemText">{DataSideBar.text}</h3>
                </div>
                <div className="SideBArSelectorItem">
                    <div className="SideBarButton"></div>
                    <h3 className="SideBarItemText">{DataSideBar.text}</h3>
                </div>
            </div>
        </div>
    )
}

