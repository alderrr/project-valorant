import {url} from '../configs/config'
import axios from 'axios'

const AgentCard = ({agents, setAgents}) => {
    return (
        <>
        {/* {JSON.stringify(agents.portrait)} */}
            {/* <h1>AgentCard</h1> */}
            <div>
                {agents?.portrait.map((agent, index) => {
                    return (
                        <div
                            key={index}>
                            <div>
                                <img
                                src={agent}
                                alt={""}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default AgentCard