import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setEditNewsActionCreator} from '../../reducers/example/news-reducer';
import {Card} from 'react-bootstrap'

function EditNews(){
    const titleRef = React.createRef();

    var state = useSelector((state) => state.newsPage.EditNews);
    const dispatch = useDispatch();
    const onChange = () => {
        dispatch(setEditNewsActionCreator(titleRef.current.value));
    }
    
    return(
        <form>
            <Card>
                <Card.Header>
                    Редактировать новость
                </Card.Header>
                <Card.Body>
                    <div className="row">
                        <div className="col 6">
                            <div className="form-group">
                                <label>Заголовок</label>
                                <input type='text' className="form-control" value={state.title} onChange={onChange} ref={titleRef}/>
                            </div>
                        </div>

                    </div>
                </Card.Body>
                <Card.Footer>
                    <button type="submit"> Редактировать </button>
                </Card.Footer>
            </Card>
        </form>
    )
}

export default EditNews;