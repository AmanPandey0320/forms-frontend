import SingleListItem from '../components/singleItemForm';

const FormList = (props) => {
    const {data} = props;
    // console.log(data);
    return ( 
        <div>
            {data.map((formData,index)=><SingleListItem key={`form${index}`} data={formData}/>)}
        </div>
     );
}
 
export default FormList;