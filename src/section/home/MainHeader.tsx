import Profile from "../../assets/images/profile.jpg"

export const MainHeader = () => {
    return (
      <article>
        <section className="flex items-center gap-x-4">
          <img className="rounded-full w-28 h-28" src={Profile} alt="profile image" />
          <a href="">Disponible para trabajar</a>
        </section>
        <section>
            <h2>Hey, Soy Victor Acosta</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni quisquam rem ut placeat doloremque totam officia repellat consectetur eos voluptatibus asperiores cum modi, vero aut, quod eius? Nihil, eos tempore.</p>
        </section>
        <section>
            <a href="#">Contactame</a>
            <a href="#">Linkedin</a>
        </section>
      </article>
    )
  }