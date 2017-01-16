using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PipNumber : MonoBehaviour {

    public int pip1 = 1;
    public int pip2 = 1;

    public bool connected = false;
    Rigidbody domino; // Used to lock domino in place
    float d_x;
    float d_y;
    float d_z;
    //Transform domino;

    //GameObject numberCube;

	// Use this for initialization
	void Start () {
        //numberCube = GameObject.FindGameObjectWithTag("NumberCube");
        //domino = GetComponent<Transform>();
        domino = GetComponent<Rigidbody>();

	}
	
    void OnTriggerEnter(Collider other)
    {
        // Check if we have number cube collision
        if(other.CompareTag("NumberCube"))
        {

            domino.constraints = RigidbodyConstraints.FreezeAll;
            connected = true;
        }

        // Check if we have a collision with a domino which is already connected to a number cube
        if (other.CompareTag("Domino"))
        {
            if(other.GetComponent<PipNumber>().connected == true)
            {
                domino.constraints = RigidbodyConstraints.FreezeAll;
                connected = true;
            }
        }
    }

	// Update is called once per frame
	void Update () {

	}
}
