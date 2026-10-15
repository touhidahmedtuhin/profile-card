function Button({title}) {
  return (
    <div>
      <button className="flex justify-center px-3 py-1 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600 mt-5 cursor-pointer">
        {title}
      </button>
    </div>
  );
}
export default Button;
