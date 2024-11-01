import {useState,useEffect} from 'react'
import {url} from "../configs/config"
import axios from 'axios'
import SideBar from '../components/SideBar'
import AgentDisp from '../components/AgentDisp'
import AgentDesc from '../components/AgentDesc'

const HomePage = () => {

    const [agents, setAgents] = useState([])
    const [selectedAgent, setSelectedAgent] = useState(null)

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
            <div className='flex min-h-screen bg-gray-900 text-white'>
                <div className='flex-1'>
                    <SideBar agents={agents} setSelectedAgent={setSelectedAgent}/>
                </div>
                <div className='flex-1'>
                    <AgentDisp agent={selectedAgent}/>
                </div>
                <div className='flex-1'>
                    <AgentDesc/>
                </div>
            </div>
        </>
    )
}

export default HomePage