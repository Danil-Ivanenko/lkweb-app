import {Card} from 'react-bootstrap'
import {setEditNewsActionCreator} from '../../reducers/example/news-reducer';
import {useDispatch} from 'react-redux'

function NewsItem(props){

    const dispatch = useDispatch();

    const handleClick = () =>{
        dispatch(setEditNewsActionCreator(props.title));
    }
    return(
        <Card>
            <Card.Header className="d-flex justify-content-between">
                <span>test</span>
                <button className="btn btn-sm bn-outline-warning" onClick={handleClick}> Редактировать</button>
            </Card.Header>
            <Card.Body>
                <em>{props.title}</em>
            </Card.Body>
            <Card.Footer>
                Кол-во лайков - {props.likes}
            </Card.Footer>
        </Card>
    );
}

export default NewsItem;
