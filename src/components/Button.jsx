function Button(props) {
  let bg = "bg-sky-500 hover:bg-sky-700";
  if (props.primary) {
    bg = "bg-emerald-500 hover:bg-emerald-700";
  }
  return (
    <>
      <div class={"my-2 block rounded text-center text-xl duration-200 " + bg}>
        <a href={props.href} class={"block px-4 py-2"}>
          {props.content}
        </a>
      </div>
    </>
  );
}

export default Button;
