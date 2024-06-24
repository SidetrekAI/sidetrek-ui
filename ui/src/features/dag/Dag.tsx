import { useCallback, useEffect, useState } from 'react'
import ReactFlow, { Node, Edge } from 'reactflow'
import { useSocket } from '@/features/ws/hooks'

export default function Dag() {
  const socket = useSocket()

  const [nodes, setNodes] = useState<Node[]>([])
  const [edges, setEdges] = useState<Edge[]>([])

  const onMessage = useCallback((message: any) => {
    const messageJson = JSON.parse(message.data)
    if (messageJson?.topic !== 'dag' || !messageJson?.data) return

    const data = messageJson.data
    console.log('data', data)

    setNodes(data?.nodes)
    setEdges(data?.edges)
  }, [])

  useEffect(() => {
    socket.addEventListener('message', onMessage)

    return () => {
      socket.removeEventListener('message', onMessage)
    }
  }, [socket, onMessage])

  return (
    <div className="w-[400px] h-[300px]">
      <ReactFlow nodes={nodes} edges={edges} />
    </div>
  )
}
