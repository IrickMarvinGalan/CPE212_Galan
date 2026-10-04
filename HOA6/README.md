# Activity No. 6: Targeting Specific Nodes and Managing Services
## Intended Learning Outcomes
- Differentiate and organize remote hosts into appropriate inventory groups based on their server
roles (e.g., web, database, file servers).
- Analyze playbook execution results and interpret changes made across different remote servers.
- Configure and manage system services remotely using Ansible modules (e.g., service module for
starting and enabling services).
- Design and apply Ansible Roles to modularize configurations and improve playbook reusability,
scalability, and maintainability.

## Summary
In this activity students will recall package installations, and be guided how to automate basic service management through the ansible.builtin.service module. Targeting specific groups in the invetory file will also be used in this activity to provide idea how to execute commands exclusively for selected hosts. The concept of tags would also be introduced to allow running only specific section of playbooks when necessary. Creating roles to modularize ansible playbooks will also be done in this laboratory.

## Key Concepts/Commands and Description
#### Pretasks
A section in an ansible playbook that runs before everything else. Hosts where the pretasks fail, the main playbook would also not be executed for the failed hosts.
#### Tags
May be added under each tag/role and using the --tags option with ansible-playbook, only the specific sections of the playbook with the matching tag would be run
#### Ansible Modules/Commands
- _ansible.builtin.service_
  > Provides a module for service management automation:
  
  > name: [service]
  
  > state: started /*to start a service*/
  
  > enabled: true /*to start a service along with system startup*/
- _ansible-playbook [playbook].yaml --tags "[tag1,tag2,tag3...]"_
  > Allows only specific portion of the ansible playbook to run. It will only run plays inside the playbook that contains the matching tags specified in the command
