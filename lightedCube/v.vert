attribute vec4 a_Position;
attribute vec4 a_Color;
attribute vec4 a_Normal;

uniform mat4 u_MvpMatrix;
uniform mat4 u_NormalMatrix;

uniform vec3 u_LightColor;
uniform vec3 u_LightDir;
uniform vec3 u_AmbientLight;

varying vec4 v_Color;

void main()
{
    gl_Position = u_MvpMatrix * a_Position;
    vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal));
    float nDotL = max(dot(u_LightDir, normal), 0.0);
    vec3 diffuse = u_LightColor * a_Color.rgb * nDotL;
    vec3 ambient = u_AmbientLight * a_Color.rgb;

    v_Color = vec4(ambient + diffuse, a_Color.a);
}