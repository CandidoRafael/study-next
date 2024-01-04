export async function  User () {
    const response = await fetch('https://api.github.com/users/CandidoRafael', {
  next: {
    revalidate: 25
  },
})
    const user = await response.json()

    return (
        <div>
            
        </div>
    )
}