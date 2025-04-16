import os
import numpy as np
import trimesh
from PIL import Image
from OpenGL.GL import *
from glfw.GLFW import *

def initialize_window():
    """
    Initialize the OpenGL window using GLFW.
    
    Input:
    - None
    Output:
    - `window`: Created window
    """
    if not glfwInit():
        return None

    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3)
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3)
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE)
    glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE)

    window = glfwCreateWindow(1200, 800, "assignment#2", None, None)
    if not window:
        glfwTerminate()
        return None

    glfwMakeContextCurrent(window)
    return window


def load_shaders(vertex_shader_fname, fragment_shader_fname):
    """
    Compile and load GLSL (vertex and fragment shaders) codes written in main.py.
    
    Input:
    - `vertex_shader_fname` (string): vertex shader code filename
    - 'fragment_shader_fname` (string): fragment shader code filename
    Output:
    - `shader_program`: compile and loaded shader program
    """
    with open(vertex_shader_fname, "rt") as f:
        vertex_shader_source = f.readlines()
    with open(fragment_shader_fname, "rt") as f:
        fragment_shader_source = f.readlines()

    # vertex shader
    vertex_shader = glCreateShader(GL_VERTEX_SHADER)    # create an empty shader object
    glShaderSource(vertex_shader, vertex_shader_source) # provide shader source code
    glCompileShader(vertex_shader)                      # compile the shader object

    # check for shader compile errors
    success = glGetShaderiv(vertex_shader, GL_COMPILE_STATUS)
    if not success:
        infoLog = glGetShaderInfoLog(vertex_shader)
        print("ERROR::SHADER::VERTEX::COMPILATION_FAILED\n" + infoLog.decode())

    # fragment shader
    fragment_shader = glCreateShader(GL_FRAGMENT_SHADER)    # create an empty shader object
    glShaderSource(fragment_shader, fragment_shader_source) # provide shader source code
    glCompileShader(fragment_shader)                        # compile the shader object

    # check for shader compile errors
    success = glGetShaderiv(fragment_shader, GL_COMPILE_STATUS)
    if not success:
        infoLog = glGetShaderInfoLog(fragment_shader)
        print("ERROR::SHADER::FRAGMENT::COMPILATION_FAILED\n" + infoLog.decode())

    # link shaders
    shader_program = glCreateProgram()               # create an empty program object
    glAttachShader(shader_program, vertex_shader)    # attach shader objects to program object
    glAttachShader(shader_program, fragment_shader)
    glLinkProgram(shader_program)                    # link the program object

    # check for linking errors
    success = glGetProgramiv(shader_program, GL_LINK_STATUS)
    if not success:
        infoLog = glGetProgramInfoLog(shader_program)
        print("ERROR::SHADER::PROGRAM::LINKING_FAILED\n" + infoLog.decode())

    glDeleteShader(vertex_shader)
    glDeleteShader(fragment_shader)

    return shader_program


def load_object(dirname="./IridescenceAbalone"):
    mesh_path = os.path.join(dirname, "mesh.glb")
    texture_path = os.path.join(dirname, "texture.jpg")
    normal_path = os.path.join(dirname, "normal.png")

    mesh_obj = list(trimesh.load(mesh_path).geometry.values())[0]

    # load attributes
    vertices = mesh_obj.vertices.astype(np.float32)
    normals = mesh_obj.vertex_normals.astype(np.float32)
    texcoords = mesh_obj.visual.uv.astype(np.float32)

    tangents = np.zeros_like(normals)
    for i in range(normals.shape[0]):
        n = normals[i]
        t = np.cross(n, [0, 0, 1])
        if np.linalg.norm(t) < 1e-6:
            t = np.cross(n, [0, 1, 0])
        t = t / np.linalg.norm(t)
        tangents[i] = t
    
    vertex_data = np.hstack((vertices, normals, texcoords, tangents)).astype(np.float32)
    indices = mesh_obj.faces.flatten().astype(np.int32)
    
    # do not use index array-based representation
    vertex_data = vertex_data[indices]  # shape: (num_faces*3, 11)

    # load texture and normal map
    texture_map = Image.open(texture_path).convert("RGB")
    normal_map = Image.open(normal_path).convert("RGB")
    
    return vertex_data, texture_map, normal_map
