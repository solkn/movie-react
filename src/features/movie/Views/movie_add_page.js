import Page from "src/components/Page";

import { Form, Input, Button } from "antd";

import { CircularProgress } from "@mui/material";

import { useDispatch,useSelector } from "react-redux";
import { createMovieAsync } from "../store/action";


const  AddMovie = ()=> {

const dispatch = useDispatch();

const { createMovieLoading,createMovieSuccess } = useSelector(
    (state) => state.movie);
  
  
const handleSubmit = (values) => {
        const { name,rating,duration } = values;
        dispatch(createMovieAsync(name,rating,duration));
      };

    
   if (createMovieLoading) {
    return (

        <Page title="Movie">
         <div
          style={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress/>
        </div>  

        </Page>
    );
  }
  // if (createMovieFailure) {
  //   return (

  //       <Page title="Movie">
  //           <h1>site is not reachable </h1>
  //        <div
  //         style={{
  //           width: "100%",
  //           height: "50px",
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //       </div>  

  //       </Page>
  //   );
  // }
  if (createMovieSuccess) {

    return (

            <h1>You added and rate a movie  successfully! </h1>
     

    );
   }
  return (
    <Page title="Movie">
      <h1>Rate your favourite movies</h1>


<Form initialValues={{}} onFinish={handleSubmit}

>
          <Form.Item
            name="name"
            label="Movie"
            rules={[
              { required: true, message: "name is required" },
            ]}
          >
            <Input size="large"/>
          </Form.Item>

          <Form.Item
            name="rating"
            label="Rating"
            rules={[{ required: true, message: "rating is required" }]}
          >
            <Input size="large"/>
          </Form.Item>

          <Form.Item
            name="duration"
            label="Duration"
            rules={[{ required: true, message: "duration is required" }]}
          >
            <Input.Password size="large"/>
          </Form.Item>

          <Form.Item>
            <div
              style={{
                display: "flex",
              }}
            >
               <Form.Item>
                        
                        <Button
                          type="primary"
                          htmlType="submit"
                          
                        >
                          Submit
                        </Button>
                    </Form.Item>
            </div>
          </Form.Item>
        </Form>
    </Page>
  );
}

  

 export default AddMovie;