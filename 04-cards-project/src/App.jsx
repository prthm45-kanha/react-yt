import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobs = [
  {
    brandLogo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: 'https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg',
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://s3-alpha.figma.com/hub/file/2747494711/31b6ad5c-b404-4086-a685-89b1d5294f1c-cover.png",
    company: "Microsoft",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Noida, India"
  },
  {
    brandLogo: 'https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651108.jpg',
    company: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    company: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3tLUDfAHg4QvXCOCAyh8X9WUD-Ev8yIWpg&s",
    company: "Netflix",
    datePosted: "4 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwQfjxYHgFGWPe6kpIwq3xWtlcSrBgjqfbA&s",
    company: "Adobe",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
    company: "Uber",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/045/588/943/small_2x/airbnb-logo-online-platform-for-rental-housing-free-vector.jpg",
    company: "Airbnb",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2018/02/Logo-Tesla.jpg",
    company: "Tesla",
    datePosted: "8 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Pune, India"
  }
];
console.log(jobs);

  return (
    <div className='parent'>
          {jobs.map(function(elem,idx){
            return <div key={idx}>
              <Card company={elem.company} logo={elem.brandLogo} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
            </div>
          })}
    </div>

  )
}

export default App
