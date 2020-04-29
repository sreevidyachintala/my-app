import React from 'react';
import './App.css';
import Data from './data/data.json';

class Profile extends React.Component{
    render(){
        var indexValue=this.props.location.data.id;
        var specificProfile=Data.profiles[indexValue];
        return(
            <section className="parent">
                <div className="card"> 
                    <div className="card-top">
        <h3> {specificProfile.basicInformation.name} </h3>
    <em> {specificProfile.basicInformation.role} </em>
                     </div>

                     <div className="card-bottom">
<a href={"mailto:"+specificProfile.basicInformation.email}> {specificProfile.basicInformation.email}  </a> <br />

<a href={"tel:"+specificProfile.basicInformation.mobile}> {specificProfile.basicInformation.mobile}</a>
                     </div>
                
                </div>

                <div className="card2">



                 <div className="card-bottom">
                       <h2>About</h2>
                    </div>
                    <div className="card-top">
                       {specificProfile.about.map((i,j)=>(
                          <p>{i.about}</p>
                       ))}
                    </div>

                    <div className="card-bottom">
                        <h2> Educational Qualifications</h2>
                    </div>

                    <div className="card-top">
                        {specificProfile.education.map((i,j)=>(
                        <ul>
                            <h4> {i.degree} </h4>
                        <p> {i.institution} </p>
                        </ul>
                        ))}
                    </div>
                    <div className="card-bottom">
                        <h2>SkillSet</h2>
                    </div>
                    <div className="card-top">
                    {specificProfile.skill.map((i,j)=>(
                      <ul>
                        <p>{i.a1}</p>
                        <p>{i.a2}</p>
                        <p>{i.a3}</p>
                        <p>{i.a4}</p>


                        </ul>
                        ))}
                    </div>
                    <div className="card-bottom">
                        <h2>Certifications</h2>
                    </div>
                    <div className="card-top">
                    {specificProfile.certification.map((i,j)=>(
                        <ul>
                           <h4>{i.name}</h4>
                           <p>{i.University}</p>
                        </ul>
                        ))}
                    </div>

                   
                    
                </div>
            </section>
        )
    }
}

export default Profile;