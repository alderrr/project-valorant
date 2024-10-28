import {useState,useEffect} from 'react'
import {url} from "../configs/config"
import axios from 'axios'
import AgentCard from '../components/AgentCard'

const HomePage = () => {
    const [agents, setAgents] = useState([])
    useEffect(() => {
        async function fetchAgents() {
            try {
                const {data} = await axios.get(`${url}/agents`)
                setAgents(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAgents()
    }, [])
    return (
        <>
            {/* <h1>HomePage</h1> */}
            {/* <div>{JSON.stringify(agents)}</div> */}
            <div>
                <AgentCard agents={agents} setAgents={setAgents}/>
            </div>
        </>
    )
}

export default HomePage