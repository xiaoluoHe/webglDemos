precision mediump float;

uniform vec3 u_LightColor;
uniform vec3 u_LightPos;
uniform vec3 u_AmbientLight;

varying vec4 v_Color;
varying vec3 v_Position;
varying vec3 v_Normal;

void main()
{
    vec3 normal = normalize(v_Normal) ;
    vec3 lightDir = normalize(u_LightPos - v_Position);
    float ldotn = max(dot(normal, lightDir), 0.0);

    vec3 diffuse = u_LightColor * v_Color.rgb * ldotn;
    vec3 ambient = u_AmbientLight * v_Color.rgb;

    gl_FragColor = vec4(diffuse + ambient, v_Color.a);
    
}