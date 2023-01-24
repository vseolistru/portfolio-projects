import React, {useState} from 'react';

const ChatForm = () => {

    const [message, setMessage] = useState('')
    const [posts, setPosts] = useState([])


    const getMessage = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            content: message
        }
        setPosts([...posts, newPost])
        setMessage('')
    }

    return (
        <>
            <div className='portfolio__content-item textarea'>
                <div className='portfolio__posts'>
                    {posts.map (item => <p key={item.id}>{item.content}</p>)}
                </div>
                <form>
                    <input type='text'
                           placeholder="Введите сообщение"
                           value={message}
                           onChange={(e)=> setMessage(e.target.value)}
                    />
                    <button onClick={getMessage}>Отправить</button>
                </form>

            </div>
        </>
    );
};

export default ChatForm;