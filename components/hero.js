const Hero = ({ title, subtitle, imageOn = false }) => {
  return (
    <div>
      <h1>CUBE</h1>
      <p>アウトプットしていくサイト</p>
      {imageOn && <figure>[画像]</figure>}
    </div>
  )
}

export default Hero
