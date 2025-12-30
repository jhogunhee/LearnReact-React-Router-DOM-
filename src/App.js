import './App.css';
import { Routes, Route, NavLink, useParams, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <h2>Contact</h2>
        </div>
    )
}

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            Home...
        </div>
    )
}

const Topics = () => {
    const lis = contents.map(content => (
        <li key={content.id}>
            <NavLink to={`/topics/${content.id}`}>
                {content.title}
            </NavLink>
        </li>
    ));

    return (
        <div>
            <h2>Topics</h2>
            <ul>
                {lis}
            </ul>
            <Outlet />
        </div>
    )
}

const Topic = () => {
    let params = useParams();
    let topic_id = params.topic_id;
    const topic = contents.find(
        content => content.id === Number(topic_id)
    );

    if (!topic) {
        return <div>존재하지 않는 토픽입니다.</div>;
    }

    return (
        <div>
            <h3>{topic.title}</h3>
                {topic.description}
        </div>
    )
}

var contents = [
    {id:1, title: 'HTML', description: 'HTML is ...'},
    {id:2, title: 'JS', description: 'JS is ...'},
    {id:3, title: 'React', description: 'React is ...'},
]

function App() {
    return (
        <div className="App">
            <h1>Hello React Router DOM</h1>
            <ul>
                {
                    // Link vs NavLink
                    // - Link    : 단순 이동용 (상태 판단 없음)
                    // - NavLink : 현재 경로(active 여부)를 판단해 UI 제어 가능
                    // - 메뉴/탭/사이드바 → NavLink 사용
                    // - 일반 링크 이동 → Link 사용
                }
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/topics">Topics</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/topics" element={<Topics/>}>
                    <Route path=":topic_id" element={<Topic />}/>
                </Route>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/*" element={'Not Found'} />
            </Routes>
        </div>
    );
}

export default App;
