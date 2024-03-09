const Gallery = () => {
    const data = [
        {
          imageLink:
            "https://images.pexels.com/photos/4090605/pexels-photo-4090605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          imageLink:
            "https://images.pexels.com/photos/7457178/pexels-photo-7457178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          imageLink:
            "https://images.pexels.com/photos/383605/pexels-photo-383605.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
          imageLink:
            "https://images.pexels.com/photos/11534647/pexels-photo-11534647.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
          imageLink:
            "https://images.pexels.com/photos/19661364/pexels-photo-19661364/free-photo-of-man-picking-up-tomatoes-in-a-market.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=loadk",
        },
        {
          imageLink:
            "https://images.pexels.com/photos/16689047/pexels-photo-16689047/free-photo-of-people-working-at-a-food-production.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          imageLink:
            "https://images.pexels.com/photos/18970100/pexels-photo-18970100/free-photo-of-woman-working-on-plantation.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          imageLink:
            "https://images.pexels.com/photos/11588042/pexels-photo-11588042.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          imageLink:
            "https://images.pexels.com/photos/11350431/pexels-photo-11350431.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
      ];
  return (
    <div>
    <h1 className='text-5xl  font-bold py-10  text-center '>Gallery</h1>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 px-32 ">
      {data.map(({ imageLink }, index) => (
        <div key={index}>
          <img
            className="h-40 w-full max-w-full rounded-lg object-cover object-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
            src={imageLink}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>
    </div>
  )
}

export default Gallery