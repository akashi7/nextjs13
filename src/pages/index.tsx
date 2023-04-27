import { Button, message } from 'antd'

export default function Home() {
  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
        <Button
          onClick={() => {
            message.success('everything is ok')
          }}
          className='bg-slate-950 text-white'
        >
          OK
        </Button>
      </div>
    </div>
  )
}
