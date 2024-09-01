import React, { useEffect, useState } from "react";

const LessonTextPlayer = ({ textSrc }) => {
	const [src, setSrc] = useState(textSrc);

	useEffect(() => {
		setSrc(textSrc);
	}, [textSrc]);
	return (
		<div className="prose">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis eu lorem et volutpat. Sed sit amet tincidunt purus. Integer neque nisl, elementum ut fermentum eget, vestibulum in augue. Phasellus sed sodales ante, eu euismod mauris. Fusce volutpat sem velit, sed imperdiet mi venenatis sit amet. Etiam rutrum vehicula tellus eu tempor. Aliquam sem tellus, iaculis et congue non, dapibus sed massa.
			</p>

			<p>
				Nulla mollis ex a cursus scelerisque. Integer commodo vel mauris a mattis. Mauris commodo vitae nibh non tempus. Integer eget pulvinar eros. Vivamus sed elementum massa, non rhoncus nibh. Aliquam euismod venenatis elit, in viverra lacus efficitur non. Nullam dictum venenatis massa, vel cursus lectus elementum id. Phasellus a augue pellentesque lacus convallis sollicitudin id sit amet felis.
			</p>

			<p>
				Suspendisse hendrerit nunc eros. Sed eget justo tempus, aliquam enim vitae, lacinia lacus. Phasellus lectus lectus, auctor id diam in, hendrerit euismod mi. Mauris ligula urna, volutpat at neque vel, dapibus euismod erat. Cras dignissim facilisis elit et venenatis. Quisque dignissim ex tortor, eu luctus dui vulputate eget. Sed vehicula egestas felis, a tempor elit sagittis et. Cras ac tincidunt lacus. Aliquam eu nibh libero. Aenean fringilla dolor a feugiat ornare. Suspendisse suscipit euismod nulla, et mollis elit eleifend vel. Mauris gravida pellentesque felis ut commodo.
			</p>
				
			<p>
				Suspendisse potenti. Aliquam congue tincidunt justo in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam suscipit ligula id urna fringilla ultricies. Sed ex diam, tempus volutpat erat sed, molestie tristique nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras fringilla vel diam lacinia egestas. Suspendisse facilisis non dolor eget commodo. In non blandit arcu, sed malesuada lorem. Donec condimentum, dui nec maximus tincidunt, ex turpis cursus felis, eu iaculis sem purus vel nibh. Donec consectetur pretium imperdiet.
			</p>
				
			<p>
			Suspendisse potenti. Aliquam congue tincidunt justo in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam suscipit ligula id urna fringilla ultricies. Sed ex diam, tempus volutpat erat sed, molestie tristique nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras fringilla vel diam lacinia egestas. Suspendisse facilisis non dolor eget commodo. In non blandit arcu, sed malesuada lorem. Donec condimentum, dui nec maximus tincidunt, ex turpis cursus felis, eu iaculis sem purus vel nibh. Donec consectetur pretium imperdiet.
			</p>
		</div>
	);
};

export default LessonTextPlayer;
