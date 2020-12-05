precision mediump int;
precision mediump float; 

uniform sampler2D texture_01;

void main( void ) {
    
    vec2 texCoord;
    vec3 color = texture2D(texture_01,texCoord).rgb;
    gl_FragColor = vec4(color,1.0f);
}