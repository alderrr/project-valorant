const AgentDisp = ({agent}) => {
    return (
        <>
            {agent ? (
                <div className="flex justify-center items-center h-full">
                    <img 
                        className="h-full object-cover"
                        src={agent?.fullPortrait} 
                        alt={agent?.displayName}
                    />
                </div>
            ) : (
                <div></div>
            )}
        </>
    )
}

export default AgentDisp