import {useState,useEffect} from 'react'
import {url} from "../configs/config"
import axios from 'axios'
import SideBar from '../components/SideBar'
import AgentDisp from '../components/AgentDisp'
import AgentDesc from '../components/AgentDesc'

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
            <div className='flex min-h-screen bg-gray-900 text-white'>
                <div className='flex-1'>
                    <SideBar agents={agents} setAgents={setAgents}/>
                </div>
                <div className='flex-1'>
                    <AgentDisp agents={agents} setAgents={setAgents}/>
                </div>
                <div className='flex-1'>
                    <AgentDesc/>
                </div>
                {/* <div className='bg-gray-900 text-white min-h-screen p-5'>
                    <h1>{JSON.stringify(agents)}</h1>
                </div> */}
            </div>
        </>
    )
}

export default HomePage