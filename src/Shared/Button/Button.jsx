

const Button = (props) => {
  return (
    <button className='bg-yellow-500 hover:bg-[#3d07ff]  hover:text-white p-2 max-w-[400px] flex justify-center border rounded-lg font-bold'>
      {props.children}
    </button>
  )
}

export default Button