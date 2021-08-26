export default function LightSwitchButton({ light, switchLight }) {
	return (
		<button className="LightSwitchButton" onClick={switchLight}>
			{light === 'on' && (
				<span className="on">
					<i>💡</i> I'm on!
				</span>
			)}

			{light === 'off' && (
				<span className="off">
					<i>💡</i> I'm off!
				</span>
			)}
		</button>
	);
}
