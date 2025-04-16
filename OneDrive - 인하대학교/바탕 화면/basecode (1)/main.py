import numpy as np
import glm
from OpenGL.GL import *
from glfw.GLFW import *
import utils
from var import *


def key_callback(window, key, scancode, action, mods):
    if key == GLFW_KEY_ESCAPE and action == GLFW_PRESS:
        glfwSetWindowShouldClose(window, GLFW_TRUE)

    ###########################################################################
    ###########################################################################
    
    # 여기에 코드를 작성하세요.
    
    ###########################################################################
    ###########################################################################


def create_texture(texture_data):
    raise NotImplementedError


def main():
    window = utils.initialize_window()
    shader_program = utils.load_shaders("./shader.vert", "./shader.frag")
    glfwSetKeyCallback(window, key_callback)

    # load mesh object
    vertex_data, texture_map, normal_map = utils.load_object()

    ###########################################################################
    ###########################################################################
    # create texture, normal maps
    # texture = create_texture(texture_map) # uncomment this
    # normal = create_texture(normal_map)   # uncomment this
    
    # 여기에 코드를 작성하세요.
    
    ###########################################################################
    ###########################################################################

    glEnable(GL_CULL_FACE) # do backface culling
    glCullFace(GL_BACK)
    
    while not glfwWindowShouldClose(window):
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)
        glEnable(GL_DEPTH_TEST)
        glUseProgram(shader_program)

    
        #######################################################################
        #######################################################################
        
        # 여기에 코드를 작성하세요.
        
        #######################################################################
        #######################################################################

        glfwSwapBuffers(window)
        glfwPollEvents()

    glfwTerminate()


if __name__ == "__main__":
    main()
