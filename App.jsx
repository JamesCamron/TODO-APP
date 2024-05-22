import './App.css';
import tasks from './components/Task/tasks';


function getDay(dateStr){
	const date = new  Date(dateStr).getDay();
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];
	return days[date];
}

function formatDate(dateStr){
	const date = new Date(dateStr);
	return `${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}`;
}

const TagListItem = ({tag})=>{
	return (
		<li key={tag.id}>
			<small>{tag.icon}</small>-{tag.text}
		</li>
	)
};

const CommentListItem = ({comment})=>{
	return (
		<div key={comment.id}>
			<h4>{comment.user.name}</h4>
			<p>{comment.text}</p>
		</div>
	)
};

const TaskListItem = ({task})=>{
	return (
		<li key={task.id}>
			<h3>{task.title}</h3>
			<p><small>{task.status}</small></p>
			<p>{task.text}</p>
		</li>
	)
}

const TaskCard = ({task})=>{
	return (
		<div className='day-card'>
			<h1 className='title'>{getDay(task.createdAt)} {formatDate(task.createdAt)} </h1>
			<h3 className='sub-title'>{task.subtitle}</h3>
			<ul className='tag-ul'>
				{task.tags.map((tag) =>(
					<TagListItem tag={tag} key={tag.id}/>
				))}
			</ul>
			<hr className='line'/>
			<div>
			<p className='notes'>Notes linked to people</p>
				<div className='comments'>
					{task.comments.map((comment)=>(
						<CommentListItem comment={comment}key={comment.id}/>
					))}
				</div>
			</div>
			<ul className='task'>
				{task.tasks.map((task)=>(
					<TaskListItem task={task}key={task.id}/>
				))}
			</ul>
		</div>
	)
}
const App = ()=>{
	return (
		<div className="card-group">
			{tasks.map((task) => (
				<TaskCard key={task.id} task={task} />
			))}
		</div>
	);
};


export default App;