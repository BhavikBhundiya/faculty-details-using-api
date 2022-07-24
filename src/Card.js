import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import FacultyDetails from "./FacultyDetails";

const Card = (props) => {

    let data;
    if (props.obj.opened){
        data = <div class="Card2 col-lg-3 col-md-4 col-sm-6" onClick={() => {
            console.log(props.obj);
        }}>
            <div class="Card-Details2 rounded">
                <div class=" profile">
                    <img class="img-fluid rounded" src={props.obj.FacultyImage} />
                </div>
                <div class="Data">
                    <div class="Name col-md-12 content">
                        {props.obj.FacultyName}
                    </div>
                    <div class="Role col-md-12 content">
                        {props.obj.FacultyDesignation}
                    </div>
                    <hr />
                    <div class="Education col-md-12 content">
                        {props.obj.FacultyHighestEducation}
                    </div>
                    <hr />
                    <div class="Other row">
                        <div class="col-md-6 content">
                            <div class="row o1">
                                <div class="OtherTitle col-md-12">
                                    Experience
                                </div>
                                <div class="ExpData content col-md-12 p-1">
                                    <div class="ExpData1">
                                        {props.obj.FacultyExperienceInYears}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 content">
                            <div class="row o2">
                                <div class="OtherTitle col-md-12">
                                    Working Since
                                </div>
                                <div class="since content col-md-12 p-1">
                                    <div class="sinceData">
                                        {props.obj.FacultyWorkingSince}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="col">
                        <div class="row o1">
                            <div class="OtherTitle col-md-12">
                                Phone No.
                            </div>
                            <div class="text-muted content col-md-12 p-1">
                                <div class="">
                                    {props.obj.FacultyMobileNumber}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="col">
                            <div class="OtherTitle col-md-12">
                                Email Id:
                            </div>
                            <div class="text-muted content col-md-12 p-1">
                                {props.obj.FacultyEmailAddress}
                            </div>
                    </div>
                </div>
            </div>
        </div>;
    }else{
        data= <div class="Card1 col-lg-3 col-md-4 col-sm-6" onClick={() => {
                    console.log(props.obj);
                }}>
        <div class="Card-Details rounded">
            <div class=" profile">
                    <img class="img-fluid rounded" src={props.obj.FacultyImage} />
            </div>
            <div class="Data">
                <div class="Name col-md-12 content">
                        {props.obj.FacultyName }
                </div>
                <div class="Role col-md-12 content">
                        {props.obj.FacultyDesignation}
                </div>
                <hr />
                <div class="Education col-md-12 content">
                        {props.obj.FacultyHighestEducation}
                </div>
                <hr />
                <div class="Other row">
                    <div class="col-md-6 content">
                        <div class="row o1">
                            <div class="OtherTitle col-md-12">
                                Experience
                            </div>
                            <div class="ExpData content col-md-12 p-1">
                                <div class="ExpData1">
                                        {props.obj.FacultyExperienceInYears}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 content">
                        <div class="row o2">
                            <div class="OtherTitle col-md-12">
                                Working Since
                            </div>
                            <div class="since content col-md-12 p-1">
                                <div class="sinceData">
                                        {props.obj.FacultyWorkingSince}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col m-1">
                    <div>
                        <Link to={"/faculty/" + props.obj.id} className="btn btn-info"> View full profile <FontAwesomeIcon icon="fa-duotone fa-angles-right" /> </Link>
                    </div>
                </div>
            </div>    
        </div>
    </div>;
    }

    return (
        <>
          {data}  
        </>
    );
}

export default Card;