const linksSocialMidia = {
  github: 'josemarciob',
  youtube: 'josemarciob',
  facebook: 'josemarciob',
  instagram: 'josemarciob',
  twitter: 'josemarciob'
}

function changeSocialMidiaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMidia[social]}`
  }
}

changeSocialMidiaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMidia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
