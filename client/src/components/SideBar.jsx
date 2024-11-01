const SideBar = ({agents}) => {

    const roles = [
        {name: 'Controller', icon: 'https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png'},
        {name: 'Duelist', icon: 'https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png'},
        {name: 'Initiator', icon: 'https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png'},
        {name: 'Sentinel', icon: 'https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png'},
    ]
    
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                {roles.map((role, index) => (
                    <div className="flex justify-center items-center p-2 rounded" key={index}>
                        <img className="" src={role.icon} alt={role.name}/>
                    </div>
                ))}
                {agents.map((agent, index) => (
                    <div className="flex justify-center items-center p-2 rounded" key={index}>
                        <img className="" src={agent.displayIcon} alt={agent.displayName}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SideBar