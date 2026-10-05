# Activity No. 4: Running Elevated Ad hoc Commands
## Intended Learning Outcomes
- Use commands that makes changes to remote machines
- Use playbook in automating ansible commands
## Summary
The activity compares and contrasts the difference between Ad Hoc commands and using Ansible Playbooks. Students will also learn how to allow Ad Hoc, and Playbooks could gain access to privilege escalation.
Apache service will be installed for an Ubuntu Server. Towards the end, students will be able to view the installed apache webpage through their own localhost's IP.

Ad Hoc - provide flexibility for running one time commands for simple tests

Playbooks - consolidates several routine commands into a compiled play.
## Commands/Modules Utilized
#### Ad Hoc Commands
- _ansible [all] -m apt -a update_cache=true --become --ask-become-pass_
  > Runs the equivalent of sudo apt update
- _ansible [group] -m apt -a "name=[package] state=[version]" --become --ask-become-pass_
  > Runs package installation, received through the name parameter and version under state parameter
#### Ansible Modules
- _ansible.builtin.apt_
  > Provides the ansible module to automate package installation as well as update repository list 
