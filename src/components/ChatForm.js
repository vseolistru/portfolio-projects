import React, { useState} from 'react';

const ChatForm = () => {

    const [message, setMessage] = useState('');
    const [posts, setPosts] = useState([]);
    const [backEndPosts, setBackEndPosts] = useState([]);

    const getMessage = async (e) => {
        e.preventDefault()
        const newPost = {            
            message: message
        }
        setPosts([...posts, newPost]);
        setMessage('')           
        console.log(backEndPosts);

        let formData = new FormData()
        formData.append('message',message)
        const res = await fetch('http://vseolif8.beget.tech/createpost', {
            method: 'POST',
            body: formData
        })

        // 'http://localhost/server/createpost'
        const localhost = 'http://localhost/server/getposts';
        const remoteServer = 'http://vseolif8.beget.tech/getposts';

         await fetch(remoteServer)
            .then(response => response.json())
            .then(data=>setBackEndPosts(data))

    }           
    
    const res = [...backEndPosts]


    return (
        <>
            <div className='portfolio__content-item textarea'>
                <div className='portfolio__posts'>
                    {res.map ((item, idx) => <p key={idx}>{item.message}</p>)}
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