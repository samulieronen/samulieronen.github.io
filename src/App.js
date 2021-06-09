import ContentBox from './components/ContentBox'


function App() {

    const projects = [
        {
            name: "samulieronen.github.io",
            desc: "This website acts as my playground for learning new front-end development related things",
            hash: ["html", "scss", "js", "react"],
            link: "www.github.com"
        },
        {
            name: "corewar",
            desc: "school project teaching how a cpu and compilers work",
            hash: ["c", "cpu", "compilers"],
            link: "www.github.com"
        },
        {
            name: "fullstackopen",
            desc: "learning full stack development",
            hash: ["frontend", "backend", "js", "react"],
            link: "www.github.com"
        },
        {
            name: "lem-in",
            desc: "school project teaching graph flow algortihms and data structures",
            hash: ["c", "graph-flow", "algo"],
            link: "www.github.com"
        }
    ]    

    return (
            projects.map(contentItem => <ContentBox content={contentItem} key={contentItem.name}/>)
    );
}

export default App;
