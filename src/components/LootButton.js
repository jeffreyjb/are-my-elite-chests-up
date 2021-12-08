import classes from './LootButton.module.css';

const LootButton = (props) => {
	return <button className={classes.Block} onClick={props.onClick} />;
};

export default LootButton;
