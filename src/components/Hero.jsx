function Hero(props) {
  return (
    <>
      <div class="flex h-full w-full flex-col content-center items-center justify-center text-center">
        <h1 class="block text-5xl">{props.title}</h1>
        <h2 class="block text-2xl">{props.subtitle}</h2>
      </div>
    </>
  );
}

export default Hero;
