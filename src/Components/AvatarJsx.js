const AvatarJsx = (params) => {
    const src = `https://randomuser.me/api/portraits/lego/1.jpg`

    return (
        <picture>
            <img src={src} alt='seba'/>
            Seba
        </picture>
    )
}

export default AvatarJsx