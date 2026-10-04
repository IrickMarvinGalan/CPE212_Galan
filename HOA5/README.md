# Activity No. 5: Implement Ansible roles in playbooks
## Intended Learning Outcomes
- Use when command in playbook for different OS distributions
- Apply refactoring techniques in cleaning up the playbook codes

## Summary
In this activity students will learn to use appropriate ansible modules such as ansible.builtin.apt and ansible.builtin.dnf with accordance to the hosts' operating system through the use of the when command.
Students will also engage in refactoring a lengthy playbook through techniques such as indented listing of package names for the apt and dng module, and another method that would be explored is through the
declaration of group variables in the inventory file to simplify package naming resolution with the ansible.builtin.package.

## Key Concepts/Commands and Description
#### Ansible Facts
Native Ansible Variables that a playbook automatically gathers and provides useful metadata when a playbook is run.
- _ansible_distribution_
  > Provides the information about the host's Distro

#### Ansible Modules
- _ansible.builtin.apt_
  > Provides the ansible module to automate package installation as well as update repository list for Ubuntu
- _ansible.builtin.dnf_
  > Provides the ansible module to automate package installation as well as update repository list for CentOS and RedHat family
- _ansible.builtin.package_
  > A flexible ansible module to automate package installation and repository list updates, applicable regardless of Linux Distro used by hosts
