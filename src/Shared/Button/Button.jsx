

const Button = (props) => {
  return (
    <button className='bg-[#f77b4e] hover:bg-[#ff7543]  hover:text-white p-2  flex justify-center text-center border rounded-lg font-bold'>
      {props.children}
    </button>
  )
}

export default Button